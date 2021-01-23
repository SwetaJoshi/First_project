const a=React.createElement;
class LikeButton extends React.Component(
    constructor(props){
        super(props);
        this.state=(liked: false);}
        render()
        {
            if(this.state.liked)
            {
            return 'You liked this';
            }
            return 'button',{onClick:()=>this.getState{{liked: true}}};
            'Like'
            );
        }
    