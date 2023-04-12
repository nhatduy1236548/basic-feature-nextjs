import React from 'react'
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'
import Link from 'next/link'

export default function EventItem({evt}) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image  src={EventTarget.image ? EventTarget.image : '/images/event-default.jpg'}
            width ={170}
            height ={100}
        />
      </div>
      <div className={styles.info}>
        <span>
            {evt.date} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
      
      <div className={styles.link}>
        <Link href={ `/events/${evt.slug}`} className='btn'>
            Details
        </Link>
      </div>
    </div>
  )
}
