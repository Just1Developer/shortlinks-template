This is a template for short links written in [Next.js](https://nextjs.org) 15.<br/>
Example: https://s.yourdomain.com/template could redirect to https://github.com/Just1Developer/shortlinks-template/

## Getting Started

All redirects are currently done with a switch-case in ```/src/lib/findshortlink.ts::getLink```.
The default page displays an "Unknown shortlink" message, for a /path/ of length 1, it will attempt to resolve the redirect for the given code. If none is found, it defaults to the Homepage.

In the ```findshortlink.ts``` file, you can simply add all your short links and redirects.
This is not the most perfect way to do it, but it's simple and good enough if you don't happen to have hundreds or thousands of short links.

## Deployment with Vercel

You can simply fork and deploy this like any other, and combine it with, for example, a Cloudflare CNAME subdomain "s" to get a classic short link format of s.domain.com/link

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details on deployment.
