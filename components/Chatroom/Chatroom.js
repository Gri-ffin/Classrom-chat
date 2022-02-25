import {
  addDoc,
  collection,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../Helpers/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Fragment, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Image from 'next/image';
import defaultImage from '../../public/images/default-image.jpeg';

export const Chatroom = () => {
  const { currentUser } = useAuth();

  const messagesRef = collection(db, 'messages');
  const queriedMessages = query(messagesRef, orderBy('createdAt'), limit(25));
  const [messages] = useCollectionData(queriedMessages, { idField: 'id' });

  const [formValue, setFormValue] = useState('');
  const [error, setError] = useState('');
  const scrolltarget = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid } = currentUser;
    if (formValue.trim().length <= 0) {
      setError("Message can't be null");
      return;
    }
    await addDoc(collection(db, 'messages'), {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      name: currentUser.displayName,
      photoURL: currentUser.photoURL,
    });
    setFormValue('');
    setError('');
    scrolltarget.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Fragment>
      <main className='p-10 h-[80vh] mx-0 overflow-y-scroll flex flex-col text-white font-bold'>
        {messages &&
          messages.map((msg) => (
            <ChatMessage
              key={Math.random()}
              message={msg}
              currentUser={currentUser}
            />
          ))}
        <div ref={scrolltarget}></div>
      </main>
      <form
        onSubmit={sendMessage}
        className='h-[10vh] fixed bottom-0 w-[100%] flex'
      >
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          className='fixed bottom-5 right-8 border-black border-2 w-[90%] h-10 bg-gray-600 rounded-md p-4 caret-white text-white'
          placeholder='Write a message'
        />
        <button type='submit' className='hidden'>
          Send
        </button>
      </form>
      {error && (
        <div className='fixed bg-red-600 text-white bottom-2 right-3 p-5 rounded-md'>
          {error}
        </div>
      )}
    </Fragment>
  );
};

function ChatMessage(props) {
  const { text, uid, name, photoURL } = props.message;
  const messageClass = uid === props.currentUser?.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <span className=''>{name}</span>
      <Image
        src={photoURL || defaultImage}
        alt='pfp Image'
        width={53}
        height={55}
        className='rounded-3xl'
      />
      <p className='max-w-[500px] mb-[12px] leading-[24px] py-[10px] px-[20px] rounded-lg relative text-center'>
        {text}
      </p>
    </div>
  );
}
