/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-07 14:21:13
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-12 14:05:01
 */
import Container from 'components/Container'
import Header from 'components/Header'
import Item from 'components/Item'
import React from 'react'

export default function projects() {
    return (
        <div className='min-h-[100vh] dark:bg-slate-900 transition-colors duration-500'>
            <Header>
                <Container>
                    <p className='text-4xl font-bold mb-10 font-text1'>Study Projects</p>
                    <div className='flex flex-wrap gap-y-16 justify-between'>
                        <Item
                            name='battleship'
                            description='A Battleship Game on Web with React.'
                            icon='&#xe928;'
                            repo='https://github.com/KelvinQiu802/battleship'
                        />
                        <Item
                            name='kanban-react'
                            description='A Kanban Web App Built with React.'
                            icon='&#xe9cb;'
                            repo='https://github.com/KelvinQiu802/kanban-react'
                        />
                        <Item
                            name='react-dnd-playground'
                            description='React drag and drop examples playground.'
                            icon='&#xe704;'
                            repo='https://github.com/KelvinQiu802/react-dnd-playground'
                        />
                        <Item
                            name='micro-react'
                            description='A micro React that implements React core concepts.'
                            icon='&#xe64b;'
                            repo='https://github.com/KelvinQiu802/micro-react'
                        />
                        <Item
                            name='mini-redux'
                            description='Use the most simple Javascript to implement Redux core functions.'
                            icon='&#xe66c;'
                            repo='https://github.com/KelvinQiu802/mini-redux'
                        />
                        <Item
                            name='tiny-compiler'
                            description='A super tiny compiler (only 200 lines) and tutorial.'
                            icon='&#xe727;'
                            repo='https://github.com/KelvinQiu802/tiny-compiler'
                        />
                        <Item
                            name='bookstore'
                            description='A Book Searching Website using Google Book API.'
                            icon='&#xe61f;'
                            repo='https://github.com/KelvinQiu802/bookstore'
                        />
                    </div>
                    <p className='text-4xl font-bold'></p>
                    <p className='text-4xl font-bold mb-10 mt-10 font-text1'>Work Projects</p>
                    <div className='flex flex-wrap gap-y-16 justify-between'>
                        <Item
                            name='battleship'
                            description='A Battleship Game on Web with React.'
                            icon='&#xe928;'
                            repo='https://github.com/KelvinQiu802/battleship'
                        />
                        <Item
                            name='kanban-react'
                            description='A Kanban Web App Built with React.'
                            icon='&#xe9cb;'
                            repo='https://github.com/KelvinQiu802/kanban-react'
                        />
                    </div>
                </Container>
            </Header>
        </div>
    )
}
