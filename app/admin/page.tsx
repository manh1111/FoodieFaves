import { getServerSession } from 'next-auth';
import { authOptions } from '@app/api/auth/[...nextauth]/route';

export default async function Admin() {
  const session = await getServerSession(authOptions);
  if (session?.user.role !== 'admin') {
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
}
