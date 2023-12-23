export async function getData() {
    const res = await fetch('http://localhost:3003/posts')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data')
    console.log('error')
    }
   
    return res.json()
  }