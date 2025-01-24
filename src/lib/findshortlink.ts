"use server"

const LINK_REFS = {
    "github":               "https://github.com/Just1Developer/",
    "template":             "https://github.com/Just1Developer/shortlinks-template/",
    "exma":                 "https://www.sle.kit.edu/downloads/Sonstige/Exmatrikulation_WEB_Formular.pdf",
} as Record<string, string>;

export const getLink = async ({ shortlink }: { shortlink: string })=> {
    return LINK_REFS[shortlink] ?? "/";
}