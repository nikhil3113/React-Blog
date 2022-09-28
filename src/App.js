import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Header />
    <Cards link="https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" title="Fire" />
    <Cards link="https://images.unsplash.com/photo-1547241850-eb8a8754f95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" title="Sea" />
    <Cards link="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" title="Mountains" />
    <Cards link="https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xpbWF0ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" title="Thunder" />
    <Cards link="https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" title="Sky" />
    <Cards link="https://images.unsplash.com/photo-1543470373-e055b73a8f29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aWNlYmVyZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="IceBerg" />
    <Footer />
    
    </div>
    
  );
}

export default App;
