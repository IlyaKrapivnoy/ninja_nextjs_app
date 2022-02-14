import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <h1>Homepage</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus deserunt distinctio dolore,
            facere illum maxime molestias rerum tempora vitae? A alias cumque debitis eaque itaque labore,
            repudiandae totam vero!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus deserunt distinctio dolore,
            facere illum maxime molestias rerum tempora vitae? A alias cumque debitis eaque itaque labore,
            repudiandae totam vero!</p>
        <Link href='/ninjas'>
            <a>See Ninja Listing</a>
        </Link>
    </div>
  )
}
