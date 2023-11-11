import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useMenu = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=>{
    axios.get('menu.json')
    .then(response => {
        setMenus(response.data)
        setLoading(false)
        setError(false)
    })
    .catch(error => {
        setError(error.message)
        setLoading(false)
    })
  }, [])
  //expose the states to outside
  return [loading, error, menus]
}

export default useMenu