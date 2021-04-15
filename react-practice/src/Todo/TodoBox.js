import React from 'react';
import * as S from './TodoBoxStyle';
import AddList from './AddList';

function TodoBox() {
    return (
        <S.Body>
            <S.Container>
                <S.Top>To Do List</S.Top>
                <AddList />
            </S.Container>
        </S.Body>
    );
}

export default TodoBox;
