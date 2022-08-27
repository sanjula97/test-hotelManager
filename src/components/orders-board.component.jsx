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
    let filteredReadyOrders = _.filter( OrderData, function(o) { return o.status == "Active";});
    let filteredActiveOrders = _.filter( OrderData, function(o) { return o.status == "Ready";});
    let filteredCompletedOrders = _.filter( OrderData, function(o) { return o.status == "Completed";});
    setNewOrders(filteredNewOrders)
    setReadyOrders(filteredReadyOrders)
    setActiveOrders(filteredActiveOrders)
    setCompletedOrders(filteredCompletedOrders)
  }

  function displayNewOrders() {
    return newOrders.map((order) => {
      return (<OrderCard order={order}/>)
    })
  }

  function displayReadyOrders() {
    return readyOrders.map((order) => {
      return (<OrderCard order={order}/>)
    })
  }

  function displayActiveOrders() {
    return activeOrders.map((order) => {
      return (<OrderCard order={order}/>)
    })
  }

  function displayCompletedOrders() {
    return completedOrders.map((order) => {
      return (<OrderCard order={order}/>)
    })
  }

  return (
    (!_.isEmpty(newOrders) || !_.isEmpty(readyOrders) || !_.isEmpty(activeOrders)  || !_.isEmpty(completedOrders)) &&
    <div style={{ margin: 24 }}>
      <div class="container">
        <div class="row align-items-start">
          <div class="col">
            New
            {displayNewOrders()}
          </div>
          <div class="col">
            Ready
            {displayReadyOrders()}
          </div>
          <div class="col">
            Active
            {displayActiveOrders()}
          </div>
          <div class="col">
            Completed
            {displayCompletedOrders()}
          </div>
        </div>
      </div>
    </div>
  );
};
