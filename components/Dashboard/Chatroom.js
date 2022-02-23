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
import { Fragment, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Image from 'next/image';
import defaultImage from '../../public/images/default-image.png';

export const Chatroom = () => {
  const { currentUser } = useAuth();

  const messagesRef = collection(db, 'messages');
  const queriedMessages = query(messagesRef, orderBy('createdAt'), limit(25));
  const [messages] = useCollectionData(queriedMessages, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid } = currentUser;
    await addDoc(collection(db, 'messages'), {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      name: currentUser.displayName,
    });
    setFormValue('');
  };

  return (
    <Fragment>
      <div className='p-10 h-[80vh] mx-0 overflow-y-scroll flex flex-col text-white font-bold'>
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} currentUser={currentUser} />
          ))}
      </div>
      <form
        onSubmit={sendMessage}
        className='h-[10vh] fixed bottom-0 w-[100%] flex'
      >
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          className='fixed bottom-5 right-[34%] border-black border-2 w-56 rounded-md'
        />
        <button
          type='submit'
          className='bg-white border-2 fixed bottom-5 right-[30%] w-14 rounded-md'
        >
          Send
        </button>
      </form>
    </Fragment>
  );
};

function ChatMessage(props) {
  const { text, uid, name } = props.message;
  const messageClass = uid === props.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <span className=''>{name}</span>
      <Image
        src={props.currentUser.photoURL || defaultImage}
        alt='pfp Image'
        width={60}
        height={50}
        className='rounded-3xl'
      />
      <p className='max-w-[500px] mb-[12px] leading-[24px] py-[10px] px-[20px] rounded-lg relative text-center'>
        {text}
      </p>
    </div>
  );
}
