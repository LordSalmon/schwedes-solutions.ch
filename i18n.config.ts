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
                options: {
                    websiteCreation: "Webseiten Erstellung",
                    websiteMaintenance: "Webseiten Wartung",
                    websiteOptimization: "Webseiten Optimierung",
                    websiteHosting: "Webseiten Hosting",
                    consulting: "Beratung",
                    applicationDevelopment: "Applikationsentwicklung",
                    other: "Anderes",
                    select: "Wähle eine Kategorie"
                }
            },
            footer: {
                text: "Copyright {year} schwedes-solutions.ch - Alle Rechte vorbehalten"
            },
            frameworks: {
                title: "Frameworks",
                titlePrefix: "Ich verwende folgendes für meine Projekte"
            },
            languages: {
                title: "Sprachen",
                titlePrefix: "Ich verwende folgendes für meine Projekte"
            },
            projects: {
                title: "Projekte",
                titlePrefix: "Hier sind meine aktuellen"
            },
            statistics: {
                title: "Statistiken",
                titlePrefix: "Erhalte einen Überblick über meine aktuellen",
                customers: "Kunden zufrieden gestellt",
                projects: "Projekte realisiert",
                yearsOfExperience: "Jahre Erfahrung",
            },
            landing: {
                location: "Standort Schweiz",
                title: "Hey, ich bin Simon!",
                subtitle: "Full stack Entwickler, Open Source Enthusiast und vor allem natürlich ein Mensch.",
                social: {
                    github: "Github",
                    linkedin: "LinkedIn",
                    personalSite: "Persönliche Webseite"
                }
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
                options: {
                    websiteCreation: "Website creation",
                    websiteMaintenance: "Website maintenance",
                    websiteOptimization: "Website optimization",
                    websiteHosting: "Website hosting",
                    consulting: "Consulting",
                    applicationDevelopment: "Application development",
                    other: "Other",
                    select: "Select a category"
                }
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
                titlePrefix: "Get an overview over my recent",
                customers: "Customers satisfied",
                projects: "Projects realized",
                yearsOfExperience: "Years of experience",
            },
            landing: {
                location: "Located in Switzerland",
                title: "Hi, I'm Simon!",
                subtitle: "Full stack developer, open source enthusiast but first and foremost a human being.",
                social: {
                    github: "Github",
                    linkedin: "LinkedIn",
                    personalSite: "Personal Site"
                }
            },
            thanks: {
                backToHome: "Back to home",
                title: "Thanks for your message!",
                subtitle: "I will get back to you as soon as possible."
            }
        }
    }
}))