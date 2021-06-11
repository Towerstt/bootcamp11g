import React, { useState } from "react";
import Header from "../../components/Header/Header";
import {useHistory} from 'react-router'

export default function AddPost(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [author, setAuthor] = useState('')

    const history = useHistory()


    const handleSubmit = async (event) =>{
        event.preventDefault()

        try {
            const newPost = JSON.stringify({
                title,
                description,
                image,
                author
            })

            const response = await fetch('https://react-11g-default-rtdb.firebaseio.com/posts.json',{
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : newPost
            })
            await response.json()
            history.push('/')

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-11 d-flex justify-content-center">
            <form className='w-75' onSubmit={handleSubmit}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="Title">Title</label>
                  <input
                    value={title}
                    type="text"
                    class="form-control"
                    id="Title"
                    placeholder="Post title"
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="description">Description</label>
                  <input
                    value={description}
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="Post content"
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="author">Author</label>
                  <input
                    value={author}
                    type="text"
                    class="form-control"
                    id="author"
                    placeholder="Author"
                    onChange={(event) => setAuthor(event.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="image">Author Pic</label>
                  <input
                    value={image}
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="http://..."
                    onChange={(event) => setImage(event.target.value)}
                  />
                </div>
              </div>
              <button className=" mt-2 btn btn-primary">Crear Post</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
