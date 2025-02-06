"use client"
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';


const Page = () => {
    const router = useRouter();

    return (<>

    
        <div className="container mt-3">
    <div className="alert alert-custom d-flex align-items-start">
        <img src="https://via.placeholder.com/50" alt="logo" className="me-3 rounded-circle"/>
        <div>
            <h5>A new version is available.</h5>
            <p>The update is available in the store. Updating the app will get you the latest features and the best experience.</p>
        </div>
        <div className="ms-auto">
            <button className="btn btn-light btn-sm me-2">Dismiss</button>
            <button className="btn btn-white btn-sm">Update</button>
        </div>
    </div>
</div>

<div className="container text-center mt-5">
    <h2>Hello Scheduler Systems</h2>
        <button onClick={() => router.push('/admin_old/myscheduler')} className="bg-blue-500 text-white p-2 rounded">
  test</button> 
  <Link href="/admin_old/myscheduler">ghjg</Link> 
    <button className="btn-purple mt-3">Create New Schedule</button>
</div>
</>
    );
}

export default Page;
