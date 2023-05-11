function AudienceNav() {
    return <nav>Audience ...</nav>;
}

function ViewsNav() {
    return <nav>Views ...</nav>;
}

export default function DashboardLayout({
    children,
    audience,
    views,
}: {
    children: React.ReactNode;
    audience: React.ReactNode;
    views: React.ReactNode;
}) {
    return (
        <>
            <h1>Tab Bar Layout</h1>
            {children}

            <h2>Audience Title</h2>
            <AudienceNav />
            {audience}

            <h2>Views Title</h2>
            <ViewsNav />
            {views}
        </>
    );
}
