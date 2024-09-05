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
        <NextLink title={target === "_blank" ? title : ""} className="group inline-block" href={href} target={target}>
            <span>{title}</span>
            <span className="block bg-block bg-[--foreground] w-full h-0.5 scale-x-0 group-hover:scale-x-100 duration-200" />
        </NextLink >
    )
}