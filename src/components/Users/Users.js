import React from 'react'
import { Card, Avatar, Pagination } from 'antd'
import styled from 'styled-components'

export const Users = ({
  usersArr,
  pageSize,
  totalUsersCount,
  onPageChanged,
  renderSubscribeButton,
  renderUserPhoto,
}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }
  const showTotal = () => {
    return `Всего ${totalUsersCount} пользователей`
  }
  return (
    <div>
      <Pagination
        defaultCurrent={1}
        total={pageCount}
        pageSizeOptions={[]}
        onChange={onPageChanged}
        showTotal={showTotal}
        showSizeChanger={false}
      />
      {usersArr.map((user) => {
        return (
          <div>
            <Card style={{ width: 300, marginTop: 16 }} key={user.id}>
              <Card.Meta
                avatar={<Avatar size={70} src={renderUserPhoto(user)} />}
                title={`${user.name}`}
                description={user.status}
              />
            </Card>
            <SubscribeButton>{renderSubscribeButton(user)}</SubscribeButton>
          </div>
        )
      })}
    </div>
  )
}
const SubscribeButton = styled.div`
  padding-top: 5px;
`
