import { socket } from '@/socket'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const Close = () => {

    const router = useRouter()
    const { roomId } = useRouter().query;

    const handleClose = ()=>{
        socket.emit('end',roomId);
        socket.disconnect();
        router.push('/')
    }

  return (
    <div className=' rounded-full bg-red px-2 py-1 group hover:bg-white transition-all duration-300 cursor-pointer' onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} size='2xl' className=' group-hover:text-red transition-all duration-300'/>
    </div>
  )
}

export default Close