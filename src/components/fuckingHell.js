import React from 'react';
class FuckingHell extends React.Component {
    // componentDidMount() {

    //     //this.$el.somePlugin();
    //     let LBDirect_Embed = null;
    //     let fuck = null;
    //     setTimeout(() => {
    //         fuck = `
    //             ${LBDirect_Embed({
    //             connectionid: "SE-RES-GLENNMILLERCAF_441726:96524",
    //             style: {
    //                 useFlatDesign: false,
    //                 baseColor: "000000"
    //             },
    //             language: "sv-SE"
    //         })}`
    //     }, 2000)
    //     console.log(this.el)
    //     this.el.innerHTML = `${fuck}`;
    // }

    render() {
        const createMarkup = {
            __html: `
        hej`};
        return (
            <React.Fragment>
                {/*  */}
                <div dangerouslySetInnerHTML={createMarkup} />
            </React.Fragment>
        )


    }
}

export default FuckingHell;