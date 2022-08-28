import React, { useEffect, useState } from 'react';
import OrderCard from './order-card.component';
import OrderData from '../data/orders.json';
import _ from 'lodash';

export const OrdersBoard = () => {
  const [newOrders, setNewOrders] = useState([]);
  const [readyOrders, setReadyOrders] = useState([]);
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);

  useEffect(() => {
    filterData()
  }, []);

  const filterData = () => {
    let filteredNewOrders = _.filter( OrderData, function(o) { return o.status == "New";});
    let filteredReadyOrders = _.filter( OrderData, function(o) { return o.status == "Ready";});
    let filteredActiveOrders = _.filter( OrderData, function(o) { return o.status == "Active";});
    let filteredCompletedOrders = _.filter( OrderData, function(o) { return o.status == "Completed";});
    setNewOrders(filteredNewOrders)
    setReadyOrders(filteredReadyOrders)
    setActiveOrders(filteredActiveOrders)
    setCompletedOrders(filteredCompletedOrders)
  }

  function onChangeOrderState(order) {
    let nextState = "Ready"

    switch (order.status) {
      case "New":
        nextState = "Ready"
        let newOrder = order
        newOrder.status = nextState
        let filteredNewOrders = _.filter( newOrders, function(o) { return o.id != order.id;});
        setReadyOrders([...readyOrders, newOrder])
        setNewOrders(filteredNewOrders)
        break
      case "Ready":
        nextState = "Active"
        let readyOrder = order
        readyOrder.status = nextState
        let filteredReadyOrders = _.filter( readyOrders, function(o) { return o.id != order.id;});
        setActiveOrders([...activeOrders, readyOrder])
        setReadyOrders(filteredReadyOrders)
        break
      case "Active":
        nextState = "Completed"
        let activeOrder = order
        activeOrder.status = nextState
        let filteredActiveOrders = _.filter( activeOrders, function(o) { return o.id != order.id;});
        setCompletedOrders([...completedOrders, activeOrder])
        setActiveOrders(filteredActiveOrders)
        break
      case "Completed":
        nextState = ""
        break
      default:
        nextState = ""
    }


    console.log("Changed orer", nextState);
  }

  function displayNewOrders() {
    return newOrders.map((order) => {
      return (<OrderCard order={order} onChangeState={onChangeOrderState} key ={order.id}/>)
    })
  }

  function displayReadyOrders() {
    return readyOrders.map((order) => {
      return (<OrderCard order={order} onChangeState={onChangeOrderState} key ={order.id}/>)
    })
  }

  function displayActiveOrders() {
    return activeOrders.map((order) => {
      return (<OrderCard order={order} onChangeState={onChangeOrderState} key ={order.id}/>)
    })
  }

  function displayCompletedOrders() {
    return completedOrders.map((order) => {
      return (<OrderCard order={order} onChangeState={onChangeOrderState} key ={order.id}/>)
    })
  }

  return (
    (!_.isEmpty(newOrders) || !_.isEmpty(readyOrders) || !_.isEmpty(activeOrders)  || !_.isEmpty(completedOrders)) &&
    <div style={{ margin: 24 }}>
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            New
            {displayNewOrders()}
          </div>
          <div className="col">
            Ready
            {displayReadyOrders()}
          </div>
          <div className="col">
            Active
            {displayActiveOrders()}
          </div>
          <div className="col">
            Completed
            {displayCompletedOrders()}
          </div>
        </div>
      </div>
    </div>
  );
};
