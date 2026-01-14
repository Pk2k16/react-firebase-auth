import React, { useState, useEffect } from "react"; // Fixed: Added useState and useEffect
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { db } from "./firebase"; // Fixed: Importing db from your config
import { collection, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore";

function App() {
  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, "notes");

  // Listen to database changes in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollectionRef, (snapshot) => {
      setNotes(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  }, []);

  async function addNote(newNote) {
    await addDoc(notesCollectionRef, newNote); // Fixed: Adds note to Firebase
  }

  async function deleteNote(id) {
    const noteDoc = doc(db, "notes", id);
    await deleteDoc(noteDoc); // Fixed: Deletes from Firebase using ID
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  ); // Fixed: Removed stray brackets and semicolons
}

export default App;