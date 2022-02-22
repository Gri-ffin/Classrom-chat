import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../Helpers/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Fragment } from 'react';

export const Chatroom = () => {
  const messagesRef = collection(db, 'messages');
  const queriedMessages = query(messagesRef, orderBy('createdAt'), limit(25));
  const [messages] = useCollectionData(queriedMessages, { idField: 'id' });

  return (
    <Fragment>
      <div className='text-blue-700 absolute top-0 right-0'>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
    </Fragment>
  );
};

function ChatMessage(props) {
  const { text, uid } = props.message;
  return <p>{text}</p>;
}
