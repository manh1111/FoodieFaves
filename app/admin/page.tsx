import { getServerSession } from 'next-auth';
import authOptions from '@app/api/auth/[...nextauth]/route';

export default async function Admin() {
  try {
    const section = (await getServerSession(authOptions)) as { user: { role: string } } | null;

    if (!section || section.user.role !== 'admin') {
      return (
        <section className="body">
          <div className="container">
            <h1 className="text-2xl font-bold">You are not authorized to view this page</h1>
          </div>
        </section>
      );
    }

    return (
      <section className="body">
        <div className="container">
          <p>ADMIN PAGE</p>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error retrieving session:', error);
    // Handle error appropriately, for example, redirect to an error page
    return (
      <section className="body">
        <div className="container">
          <h1 className="text-2xl font-bold">Error retrieving session</h1>
        </div>
      </section>
    );
  }
}
