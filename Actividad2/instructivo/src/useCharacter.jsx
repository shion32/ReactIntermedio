import React, { useState,useEffect } from 'react'
import axios from 'axios';

const useCharacter = (id) => {
    const [character,setCharacter]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const FetchCharacter=async()=>{
            try {
                const response=await axios.get(
                    `https://rickandmortyapi.com/api/character/${id}`
                )
                setCharacter(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        FetchCharacter();
    },[id]);
  return {character,loading,error};
}

export default useCharacter;

