export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    inheritLocale: "en",
    messages: {
        de: {
            contact: {
                titlePrefix: "Das ist der Weg für",
                title: "Kontakt",
                sendMessage: "Nachricht senden",
                firstName: "Vorname",
                lastName: "Nachname",
                email: "E-Mail",
                message: "Nachricht",
                success: "Nachricht erfolgreich gesendet",
                error: "Nachricht konnte nicht gesendet werden",
            },
            footer: {
                text: "Copyright {year} schwedes-solutions.ch - Alle Rechte vorbehalten"
            },
            landing: {
                location: "Standort Schweiz",
                github: "GitHub",
                linkedin: "LinkedIn",
                personalSite: "Persönliche Webseite",
                title: "Hey, ich bin Simon!",
                subtitle: "Full stack Entwickler, Open Source Enthusiast und vor allem natürlich ein Mensch.",
            },
            thanks: {
                backToHome: "Zurück zur Startseite",
                title: "Danke für deine Nachricht!",
                subtitle: "Ich werde mich so schnell wie möglich bei dir melden."
            },
        },
        en: {
            contact: {
                titlePrefix: "This is the way for",
                title: "Contact",
                sendMessage: "Send message",
                firstName: "First name",
                lastName: "Last name",
                email: "E-Mail",
                message: "Message",
                success: "Message sent successfully",
                error: "Message could not be sent",
            },
            footer: {
                text: "Copyright {year} schwedes-solutions.ch - All rights reserved"
            },
            frameworks: {
                title: "Frameworks",
                titlePrefix: "I use the following for my projects"
            },
            languages: {
                title: "Languages",
                titlePrefix: "I use the following for my projects"
            },
            projects: {
                title: "Projects",
                titlePrefix: "Here are my recent"
            },
            statistics: {
                title: "Statistics",
                titlePrefix: "Get an overview over my recent"
            },
            landing: {
                location: "Located in Switzerland",
                github: "GitHub",
                linkedin: "LinkedIn",
                personalSite: "Personal Site",
                title: "Hi, I'm Simon!",
                subtitle: "Full stack developer, open source enthusiast but first and foremost importantly a human being.",
            },
            thanks: {
                backToHome: "Back to home",
                title: "Thanks for your message!",
                subtitle: "I will get back to you as soon as possible."
            }
        }
    }
}))