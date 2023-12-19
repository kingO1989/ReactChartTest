
import TestRenderer from 'react-test-renderer'; // ES6
import SelectTimeSeries from "./Component/SelectTimeSeries";
import * as utils from "./Component/utilities";

/*
tool used : react-test-renderer module / TestRenderer
purpose: test snapshots and simulate render changes
implementation:
1.use Testrenderer to create a non browser render instance
2.convert to json, once in json array format used methods like map,find,filter to traverse nodes
3.once node has been retrieved use props to find properties or run methods
4.note once an method is rerun , it will rerender the Testrenderer create method must be used to create an updated reference
*/


it("snap shot test", async () => {
    //create a render of the SelectTimeSeries component
    const SelectTimeSeriesRenderer = TestRenderer.create(
        <SelectTimeSeries />
    );
    //spy on the fetchData method as it is important to the  SelectTimeSeries component
    const spy = jest.spyOn(utils, 'fetchData');


    //get the json extract so we can perform snapshots and actions
    let STSJson = SelectTimeSeriesRenderer.toJSON();


    //create snapshot here
    expect(STSJson).toMatchSnapshot();



    let tsSelectTree = STSJson.find((t) => t.props.data_test === "time_series");

    let cmSelectTree = STSJson.find((t) => t.props.data_test === "company");
    //extract the button child from the List element rendered
    let btn = STSJson.find((t) => t.props.data_test === "btn");




    //execute the onclick method, this should trigger a rerenderd
    await TestRenderer.act(async () => {
        tsSelectTree.props.onChange({ target: { value: 'TIME_SERIES_INTRADAY' } })
        cmSelectTree.props.onChange({ target: { value: 'AAPL' } })
        await btn.props.onClick();
    });
    //Component must have update, we can confirm by taking another snap shot
    STSJson = SelectTimeSeriesRenderer.toJSON();
    expect(STSJson).toMatchSnapshot();

    //test to see if our view as updated
    let mockViewTree = STSJson.find((t) => t.type === "div" && t.props.className === "selected_view");

    console.log(mockViewTree.children);

    expect(spy).toHaveBeenCalledTimes(1)
    // expect(mockViewTree.children[0].children[0]).toBe("name");

    spy.mockRestore();
})



