export const deletePost = ( id ) => {
  console.log('test action creator')
  return {
    type: 'DELETE_POST',
    id
  }
}