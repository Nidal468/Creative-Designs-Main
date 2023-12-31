import React from 'react';
import { useState } from 'react'
import styles from '../styles/styles.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

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
	const { data: session } = useSession();

  if (!session) {
    return (
      <div className={styles.Sign}>
        <button onClick={() => signIn('google')}>Sign In</button>
      </div>
    );
  }
  return(
	<div className={styles.Sign}>
        <button onClick={() => signOut('google')}>Sign Out</button>
      </div>
  )
}