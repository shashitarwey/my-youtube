import CommentsList from "./CommentsList";
const commentsData = [
  {
    name: 'Rajesh',
    text: 'This is a great article! Thanks for sharing your insights.',
    replies: [
      {
        name: 'Meena',
        text: 'Absolutely agree, Rajesh! The points made are very valid.',
        replies: [
          {
            name: 'Vikram',
            text: 'I think there could be more examples to support the arguments.',
            replies: [
              {
                name: 'Anita',
                text: 'True, Vikram. Adding real-world examples would strengthen the case.',
                replies: [
                  {
                    name: 'Ramesh',
                    text: 'Here’s an example I came across recently, which might fit well.',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Pooja',
    text: 'I have a different perspective on this topic.',
    replies: [
      {
        name: 'Amit',
        text: 'Interesting perspective, Pooja. Can you elaborate on your thoughts?',
        replies: [
          {
            name: 'Pooja',
            text: 'Sure! I believe the current approach misses some key nuances.',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Sanjay',
    text: 'I really appreciate the depth of analysis in this article.',
    replies: [
      {
        name: 'Sunita',
        text: 'Same here, Sanjay. The research behind this seems solid.',
        replies: [
          {
            name: 'Arjun',
            text: 'Do you think the conclusions are practical enough?',
            replies: [
              {
                name: 'Sunita',
                text: 'Good question, Arjun. I think they’re practical, but some may require adjustments.',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Kavita',
    text: 'This reminds me of a similar situation I faced last year.',
    replies: [
      {
        name: 'Manoj',
        text: 'Kavita, could you share more about that experience?',
        replies: [
          {
            name: 'Kavita',
            text: 'Of course! It was about adapting to unexpected changes.',
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentsConatiner = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData}></CommentsList>
    </div>
  );
};

export default CommentsConatiner;
