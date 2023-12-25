type GithubEventType = "PushEvent" | "CreateEvent" | "DeleteEvent" | "ForkEvent" | "GollumEvent" | "IssuesEvent" | "IssueCommentEvent" | "MemberEvent" | "PublicEvent" | "PullRequestEvent" | "PullRequestReviewEvent" | "PullRequestReviewCommentEvent" | "ReleaseEvent" | "WatchEvent";

export type GithubEventBase = {
    id: string;
    type: GithubEventType;
    actor: {
        id: number;
        login: string;
        display_login: string;
        gravatar_id: string;
        url: string;
        avatar_url: string;
    };
    repo: {
        id: number;
        name: string;
        url: string;
    };
    public: boolean;
    created_at: string;
}

type GithubEventPush = GithubEventBase & {
    type: "PushEvent"
    payload: {
        push_id: number;
        size: number;
        distinct_size: number;
        ref: string;
        head: string;
        before: string;
        commits: {
            sha: string;
            author: {
                email: string;
                name: string;
            };
            message: string;
            distinct: boolean;
            url: string;
        }[];
    }
}

type GithubEventCreate = GithubEventBase & {
    type: "CreateEvent"
    payload: {
        ref: string;
        ref_type: string;
        master_branch: string;
        description: string;
        pusher_type: string;
    }
}

type GithubEventWatch = GithubEventBase & {
    type: "WatchEvent"
    payload: {
        action: string;
    }
}

type GithubEvent = GithubEventCreate | GithubEventPush | GithubEventWatch;

export default defineEventHandler(async (event) => {
    const url = "https://api.github.com/users/LordSalmon/events?per_page=100000";
    const result = await (await fetch(url, {
        headers: {
            "Authorization": `Bearer ${useRuntimeConfig().githubToken}`
        }
    })).json();
    return result as GithubEvent[];
});