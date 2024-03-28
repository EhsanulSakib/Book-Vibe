import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifyAddRead = () => toast.success("Book added in read books successfully");
const notifyWarningRead = () => toast.error("Already added in the reading books list!");
const notifyAddWishlist = () => toast.success("Book added in wishlist successfully");
const notifyWarningWishlist = () => toast.error("Already added in the wishlist!");
const notifyErrorWishlist = () => toast.error("Book already in read book list. You can't add it to wishlist");


const getStoredReadBooks = () =>{
    const storedReadBooks = localStorage.getItem('read-books');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const savedReadBooks = id =>{
    const storedReadBooks = getStoredReadBooks();
    const exists = storedReadBooks.find(bookId => bookId === id);

    if(!exists){
        notifyAddRead();
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
    }
    else{
        notifyWarningRead();
    }
}

const getStoredWishList = () =>{
    const storedWishList = localStorage.getItem('wish-list');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
}

const savedWishList = id =>{
    const storedWishList = getStoredWishList();
    const exists = storedWishList.find(bookId => bookId === id);
    const storedReadBooks = getStoredReadBooks();
    const existsInRead = storedReadBooks.find(bookId => bookId === id);

    if(!exists && existsInRead){
        notifyErrorWishlist();
    }
    else if(!exists && !existsInRead){
        notifyAddWishlist();
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
    }
    else{
        notifyWarningWishlist();
    }
}

export {getStoredReadBooks, savedReadBooks, getStoredWishList,savedWishList};
