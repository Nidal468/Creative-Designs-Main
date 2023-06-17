import React from 'react';
import { useState } from 'react'
import styles from '../styles/styles.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

const mockSession = {
	user: {
	  name: 'John Doe',
	  email: 'john.doe@example.com',
	  // Add any other required user properties
	},
  };

export function Nav() {
	return(
		<nav className={styles.nav}>
							<input type="text" placeholder="latest designs"/>
							<div className={styles.links}>
								<i className="fi fi-brands-youtube" id={styles.youtube}></i>
								<i className="fi fi-brands-linkedin" id={styles.linkedin}></i>
								<i className="fi fi-brands-github" id={styles.github}></i>
								<i className="fi fi-brands-twitter" id={styles.twitter}></i>
							</div>
							<Google/>
						</nav>
	)
}
export function Google(){
	const [session, loading] = React.useState(mockSession);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div>
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      </div>
    );
  }
  return(
	<div className={styles.player}>
								<div className={styles.account} onClick={() => signIn('google')}>sign in</div>
							</div>
  )
}