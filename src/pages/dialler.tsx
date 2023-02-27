import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <span className="controls">
        <div>Initialization/Login</div>
        <input type="button" value="initialized" />
        <input type="button" value="log in" />
        <input type="button" value="log out" />
        <hr />
        <div>Calling related methods</div>
        <input type="button" value="outgoing call started" />
        <input type="button" value="call answered" />
        <br />
        <input type="button" value="call ended" />
        <input type="button" value="call completed" />
        <hr />
        <div>Misc. events</div>
        <input type="button" value="send error" />
        <input type="button" value="change size" />
      </span>
      <hr />
      <div>Incoming Messages</div>
      <div id="incomingMsgs"></div>

      <script src="./bin/index_combined.js" async></script>


    </>
  )
}