import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../Utility/LocalStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


const Read = () => {
    const books = useLoaderData();

    const [readBooks,setReadBooks] = useState([])

    useEffect(() =>{
        const storedReadBooks = getStoredReadBooks();
        if (books.length > 0){
            const readedBooks = []
            for(const bookId of storedReadBooks){
                const book = books.find(book => book.bookId === bookId);
                if(book){
                    readedBooks.push(book)
                }
            }
            setReadBooks(readedBooks);
        }
    },[books])

    const {bookName,totalPages} = readBooks;

    const data = readBooks?.map(book => {
        return{
            Name: book.bookName,
            Pages: book.totalPages
        }
    })

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="flex justify-center">             
                <BarChart
                width={800}
                height={700}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Name" height={350} angle={-90} textAnchor="end"/>
                <YAxis />
                <Bar dataKey="Pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
                </BarChart>
        </div>
    );
};

export default Read;