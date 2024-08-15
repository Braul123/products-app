
import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import './PaginationLayout.css';
import { PropsPagintaion } from '../../../interface/models/interface';

export default function PaginationLayout(data:PropsPagintaion) {
    const [count, setCount] = useState(1);
    const [page, setPage] = useState(1);
    // Inica los datos
    useEffect(() => {
        setCount(data.count);
        setPage(data.initalPage);
    },[data])

    // Retorla la pagina a la que debe ir
    const changePage = (page: number) => {
        data.onChange(page);
    }

    return (
        <div className='contentPaginator'>
            <Pagination
                className='pag'
                count={count}
                page={page}
                color="primary"
                onChange={(event: any, page: number) => {changePage(page)}}
            />
        </div>
    )
}
