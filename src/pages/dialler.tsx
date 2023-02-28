import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiCircle, mdiDialpad, mdiMicrophoneOff } from '@mdi/js';

export default function Home() {
  return (
    <>
      <section className='section has-background-dark px-2 py-2 '>
        <div className="columns is-vcentered is-mobile mb-0 ">
          <div className="column">
            <p className="has-text-white">Chris Cain</p>
            <p className="has-text-white">+1 800 100 100</p>
          </div>
          <div className="column">
            <button className="button is-danger is-pulled-right">End call</button>
          </div>
        </div>
        <div className='buttons'>
        </div>
      </section>
      <section className="section content has-background-light px-2 py-2">
        <div className="columns has-text-centered	 is-vcentered is-mobile m-0">
          <div className="column">
            <button className="button is-rounded"><Icon path={mdiCircle}
              title="Record"
              size={1}
            />
            </button>
            <p>Record</p>
          </div>
          <div className="column">

            <button className="button is-rounded"><Icon path={mdiMicrophoneOff}
              title="Record"
              size={1}
            /></button>
            <p>Mute</p>

          </div>
          <div className="column">

            <button className="button is-rounded"><Icon path={mdiDialpad}
              title="Record"
              size={1}
            /></button>
            <p>Keypad</p>

          </div>
        </div>
      </section>
      <section className='section content py-0'>
        <form>
          <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
        </form>
      </section>

      <section className='section content '>
        <p className="">Debugging Events</p>
        <div className='buttons'>
          <button className="button">initialized</button>
          <button className="button">log in</button>
          <button className="button">log out</button>
          <button className="button">outgoing call started</button>
          <button className="button">call answered</button>
          <button className="button">call ended</button>
          <button className="button">call completed</button>
          <button className="button">send error</button>
          <button className="button">change size</button>
        </div>


      </section>
    </>
  )
}