import { chatListCTX } from './contexts.js'
import { render } from '../../utils/render.js'
import AuthWorkspace from '../../components/AuthWorkspace.js'
import ChatListBlock from '../../components/ChatListBlock.js'
import ChatBlock from '../../components/ChatBlock.js'


const chatListBlock = new ChatListBlock(chatListCTX, [])

const chatBlock = new ChatBlock({}, [])

const workspaceChildren = [
    {
        parentNodeSelector: '.workspace__container',
        node: chatListBlock.getContent()
    },
    {
        parentNodeSelector: '.workspace__container',
        node: chatBlock.getContent()
    }
]

const workspace = new AuthWorkspace({}, workspaceChildren)

render( '.app', workspace )

// <div class="chat-list__container">
// <div class="chat-list__container__profile-link"><a href="#">Профиль</a></div>
// <div class="chat-list__search__container">
//     <input class="chat-list__search__input" placeholder="Поиск..." />
// </div>
// <div class="chat-list__container__list">
//     <ul>
//         <li class="chat-list__item">
//             <hr>
//             <div class="chat-list__item__avatar__container">
//             </div>
//             <span class="chat-list__item__chat-author__container">friend</span>
//             <div class="chat-list__item__last-message__container">
//                 Как дела?
//             </div>
//             <span class="chat-list__item__time">15:22</span>
//         </li>
//         <li class="chat-list__item">
//             <hr>
//             <div class="chat-list__item__avatar__container">
//             </div>
//             <span class="chat-list__item__chat-author__container">Mama</span>
//             <div class="chat-list__item__last-message__container">
//                 Че делаешь?
//             </div>
//             <span class="chat-list__item__time">15:22</span>
//             <div class="chat-list__item__counter">2</div>
//         </li>
//         <li class="chat-list__item">
//             <hr>
//             <div class="chat-list__item__avatar__container">
//             </div>
//             <span class="chat-list__item__chat-author__container">Papa</span>
//             <div class="chat-list__item__last-message__container">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere aliquid rem
//                 quae
//                 velit.
//                 Perspiciatis a laudantium sunt culpa eum. Magni, nemo alias. Consectetur aliquid
//                 quae
//                 vel
//                 harum
//                 libero excepturi.
//             </div>
//             <span class="chat-list__item__time">15:22</span>
//         </li>
//         <li class="chat-list__item">
//             <hr>
//             <div class="chat-list__item__avatar__container">
//             </div>
//             <span class="chat-list__item__chat-author__container">PISA</span>
//             <div class="chat-list__item__last-message__container">
//                 Как дела?
//             </div>
//         </li>
//         <li class="chat-list__item">
//             <hr>
//             <div class="chat-list__item__avatar__container">
//             </div>
//             <span class="chat-list__item__chat-author__container">Mamam</span>
//             <div class="chat-list__item__last-message__container">
//                 Че делаешь?
//             </div>
//             <span class="chat-list__item__time">15:22</span>
//         </li>
//         <li class="chat-list__item">
//             <hr>
//             <div class="chat-list__item__avatar__container">
//             </div>
//             <span class="chat-list__item__chat-author__container">Papa</span>
//             <div class="chat-list__item__last-message__container">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere aliquid rem
//                 quae
//                 velit.
//                 Perspiciatis a laudantium sunt culpa eum. Magni, nemo alias. Consectetur aliquid
//                 quae
//                 vel
//                 harum
//                 libero excepturi.
//             </div>
//             <span class="chat-list__item__time">15:22</span>
//             <div class="chat-list__item__counter">4</div>
//         </li>
//         <li class="chat-list__item">
//             <hr>
//             <div class="chat-list__item__avatar__container">
//             </div>
//             <span class="chat-list__item__chat-author__container">PISA</span>
//             <div class="chat-list__item__last-message__container">
//                 Как дела?
//             </div>
//         </li>
//         <li class="chat-list__item">
//             <hr>
//             <div class="chat-list__item__avatar__container">
//             </div>
//             <span class="chat-list__item__chat-author__container">Mamam</span>
//             <div class="chat-list__item__last-message__container">
//                 Че делаешь?
//             </div>
//             <span class="chat-list__item__time">15:22</span>
//         </li>
//         <li class="chat-list__item">
//             <hr>
//             <div class="chat-list__item__avatar__container">
//             </div>
//             <span class="chat-list__item__chat-author__container">Papa</span>
//             <div class="chat-list__item__last-message__container">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere aliquid rem
//                 quae
//                 velit.
//                 Perspiciatis a laudantium sunt culpa eum. Magni, nemo alias. Consectetur aliquid
//                 quae
//                 vel
//                 harum
//                 libero excepturi.
//             </div>
//             <span class="chat-list__item__time">15:22</span>
//         </li>
//         <li class="chat-list__item">
//             <hr>
//             <div class="chat-list__item__avatar__container">
//             </div>
//             <span class="chat-list__item__chat-author__container">PISA</span>
//             <div class="chat-list__item__last-message__container">
//                 Как дела?
//             </div>
//             <span class="chat-list__item__time">15:22</span>
//         </li>
//         <li class="chat-list__item">
//             <hr>
//             <div class="chat-list__item__avatar__container">
//             </div>
//             <span class="chat-list__item__chat-author__container">Mamam</span>
//             <div class="chat-list__item__last-message__container">
//                 Че делаешь?
//             </div>
//             <span class="chat-list__item__time">15:22</span>
//         </li>
//         <li class="chat-list__item">
//             <hr>
//             <div class="chat-list__item__avatar__container">
//             </div>
//             <span class="chat-list__item__chat-author__container">Papa</span>
//             <div class="chat-list__item__last-message__container">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere aliquid rem
//                 quae
//                 velit.
//                 Perspiciatis a laudantium sunt culpa eum. Magni, nemo alias. Consectetur aliquid
//                 quae
//                 vel
//                 harum
//                 libero excepturi.
//             </div>
//             <span class="chat-list__item__time">15:22</span>
//         </li>
//     </ul>
// </div>
// </div>
// <div class="chat-container">
// <div class="chat-container__dummy__content">
//     <span>Выберите чат, чтобы написать сообщение</span>
// </div>
// </div>