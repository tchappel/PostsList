import styled from 'styled-components'

export const PostTitle = styled.div`
    text-transform: capitalize;
`

export const PostBody = styled.div`
    &::first-letter {
    text-transform: uppercase;
}
`