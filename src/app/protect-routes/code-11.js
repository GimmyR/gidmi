export const code11 = `
export const metadata: Metadata = {
    title: "Dashboard - My website",
    description: \`Welcome on the dashboard of my website. 
                  You need to be authenticated to access this page.\`
};

export default async function DashboardPage() {
    return (
        <h1 className="text-warning">Dashboard</h1>
    );
}
`;