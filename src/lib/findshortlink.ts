"use server"

export const getLink = async ({ shortlink }: { shortlink: string })=> {
    switch (shortlink) {
        // Some examples:
        case "github":
            return "https://github.com/Just1Developer/"
        case "template":
            return "https://github.com/Just1Developer/shortlinks-template/"
        case "exma":    // For the meme
            return "https://www.sle.kit.edu/downloads/Sonstige/Exmatrikulation_WEB_Formular.pdf"
        default:
            return "/"  // Defaults to error page
    }
}