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
                text: "Copyright {year} schwedes-solutions.ch - Alle Rechte vorbehalten",
                sections: {
                    data: {
                        title: "Daten",
                        buttons: {
                            imprint: "Impressum",
                            privacy: "Datenschutz"
                        }
                    },
                    projects: {
                        title: "Projekte",
                    },
                }
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
                pageTitle: "Startseite",
                pageDescription: "Als erfahrener Senior Fullstack-Entwickler und zuverlässiger Freelancer biete ich maßgeschneiderte Lösungen für deine Entwicklungsprojekte. Mit fundiertem Fachwissen und umfassender Erfahrung in der Auftragsentwicklung bin ich dein vertrauenswürdiger Partner für die Realisierung digitaler Projekte. Entdecke erstklassige Programmierung, effiziente Umsetzung und professionelle Zusammenarbeit. Kontaktiere mich für eine individuelle Beratung und maximiere den Erfolg deiner Webentwicklungsvorhaben.",
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
                pageTitle: "Danke",
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
                text: "Copyright {year} schwedes-solutions.ch - All rights reserved",
                sections: {
                    data: {
                        title: "Data",
                        buttons: {
                            imprint: "Imprint",
                            privacy: "Privacy"
                        }
                    },
                    projects: {
                        title: "Projects",
                    },
                }
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
                pageTitle: "Home",
                pageDescription: "As an accomplished Senior Full-stack Developer and dependable freelancer, I specialize in delivering tailored solutions for your development projects. With extensive expertise and a proven track record in contract development, I serve as your trusted partner in bringing digital initiatives to life. Explore top-notch programming, efficient implementation, and professional collaboration. Get in touch for personalized consultation and elevate the success of your web development endeavors.",
                location: "Located in Switzerland",
                title: "Hey! I am Simon.",
                subtitle: "Full stack developer, open source enthusiast but first and foremost a human being.",
                social: {
                    github: "Github",
                    linkedin: "LinkedIn",
                    personalSite: "Personal Site"
                }
            },
            thanks: {
                pageTitle: "Thanks",
                backToHome: "Back to home",
                title: "Thanks for your message!",
                subtitle: "I will get back to you as soon as possible."
            },
        }
    }
}))