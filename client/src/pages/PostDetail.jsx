import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'

import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    // <div>PostDetail</div>
     
    <section className="post-detail">
      <div className="container post-detail__container">

        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>


        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita exercitationem ad eligendi 
          suscipit itaque soluta quam, quos eveniet adipisci corrupti voluptate praesentium, corporis dolor, 
          voluptates officia sint laboriosam! Aperiam, veritatis. Deserunt aut sequi similique, pariatur eum 
          eligendi libero reiciendis eaque?</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia officiis ad itaque, molestias 
            veritatis animi. Impedit, quam ratione. Optio quisquam aperiam quia, ut aliquid totam, officiis, 
            obcaecati itaque veniam asperiores vitae debitis facere deleniti cupiditate quas ratione tempore 
            rerum expedita amet provident exercitationem dolor quae labore numquam? Libero explicabo, qui 
            dolorum expedita veniam incidunt!
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt, nobis saepe ipsam quos 
          voluptas sapiente non corporis? Quam magnam doloribus, cupiditate illum at corporis! Atque eaque 
          aspernatur, dolore labore maxime impedit voluptate magni et recusandae. Corporis, sit temporibus 
          mollitia suscipit autem voluptate neque laborum nemo at cumque ullam, eligendi quasi distinctio 
          nulla inventore nisi doloremque non eveniet blanditiis nobis? Illo, explicabo! Commodi vero porro 
          est sed laborum? Obcaecati veritatis consectetur, libero distinctio architecto et fuga rerum 
          sunt optio iure voluptatum debitis doloremque dolores a animi voluptate? Illo delectus suscipit 
          atque provident perspiciatis expedita dignissimos fugiat voluptates maiores? Sint, voluptas itaque 
          quidem rem ipsa est illum tempore aut.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem libero quam debitis at ut minima 
            provident nemo neque. Officiis, sed.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ratione, architecto debitis, repellendus, voluptas libero est molestias deserunt quia harum ducimus veritatis vero hic a? Modi blanditiis nobis cupiditate fugit repellat officia, perferendis tempora consequatur vitae quos molestias. Iusto, voluptatibus? Quaerat molestiae odit officia. Dolorem possimus eveniet ratione. Laboriosam amet nisi exercitationem reprehenderit quibusdam culpa earum quam vel ducimus molestiae cumque dolores veritatis facilis ipsum aliquid pariatur nam in illum saepe id, porro expedita. Modi porro possimus, aspernatur est impedit voluptate? Doloremque officia debitis distinctio laudantium! Accusantium ipsam illo cumque possimus vero. Omnis eligendi nostrum rem et laudantium? Beatae velit esse ratione veritatis commodi odit atque similique dignissimos voluptas quas aperiam illo, aliquam tempore inventore placeat corporis. Accusantium quos culpa, blanditiis consequuntur eum hic distinctio ratione error? Explicabo nam quidem nemo corporis, soluta incidunt esse quibusdam eius voluptas magni in aperiam iste! Aliquid, dolores ratione maxime quae rem dignissimos explicabo placeat sapiente animi, ducimus magni, nulla quisquam? Pariatur, reprehenderit nobis assumenda quasi totam ea. Quae architecto saepe necessitatibus harum, quas adipisci? Quos aliquid ipsa eos veniam rem eligendi itaque debitis aspernatur officiis reiciendis atque placeat quis odio, nostrum vero repudiandae error pariatur at blanditiis nesciunt veritatis eum excepturi nulla possimus.</p>

      </div>
    </section>
  )
}

export default PostDetail