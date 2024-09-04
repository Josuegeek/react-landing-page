import FeatureDetail from './featuredetail'

function FeatureList(){
    return(
        <div className="flex flex-row flex-wrap p-2 mt-12 gap-5">
            <FeatureDetail title='OpenType features Variable fonts' 
                            image='src/assets/img/feature1.png'
                            description='Slate helps you see how many more days you need to work to reach 
                                        your financial goal.'/>
            <FeatureDetail title='Design with real data' 
                            image='src/assets/img/feature2.png'
                            description='Slate helps you see how many more days you need to work to reach 
                                        your financial goal.'/>
            <FeatureDetail title='Fastest way to take action' 
                            image='src/assets/img/feature3.png'
                            description='Slate helps you see how many more days you need to work to reach 
                                        your financial goal.'/>
        </div>
    )
}

export default FeatureList

