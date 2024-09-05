import NextLink from "next/link";

export default function Link({
    title,
    href,
    target = "_self"
}: {
    title: string,
    href: string,
    target?: "_self" | "_blank"
}) {
    return (
        <NextLink title={title} className="group" href={href} target={target}>
            <span>{title}</span>
            <span className="block bg-block dark:bg-white w-full h-0.5 scale-x-0 group-hover:scale-x-100 duration-200" />
        </NextLink >
    )
}