# Tradeshift challenge

## What does this application do?

Single page application which determines the type of a triangle with three inputs for the lengths of its sides, given by the user.

## The application was developed making use of:
- ReactJS
- Redux 
- Redux Thunk middleware (for async requests)
- Jest 

## How was my process of development

I started by planning the application and implemented a quick "prototype" in HTML with Javascript/jQuery (html-VERSION folder).

Then I started developing it in ReactJS. I know it is too much for such a small application like this, which is not integrated to any external applications, but I tried to show a bit of what I can do and that's the main reason I used Redux Thunk. 

I separeted my logic in two different functions, one I kept on the main component App.js, to validate the given inputs and giving visual feedbacks to the user. On the other hand, I brought the function that evaluates the inputs and tells of which kind is the triangle to the Redux action file. I could have built both logics in only one function and created a boolean flag as state to control the visual feedback too, and from a reactive programing perspective, it would have been a better decision. But, once more, I decided to show different skills of mine.

To finish, I wrote a very simples unity test to evaluate the function that classifies the triangles.
