import React from "react";

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  };

const newRow = () => {
  const statusChance = Math.floor(Math.random() * 1000000);
  return {
    Account: 'Account' + statusChance,
    Entity: 'Entity' + statusChance,
    Time: 'Time' + statusChance,
    Audit: 'Audit' + statusChance,
    Currency: 'Currency' + statusChance,
    firstName: 'firstName' + statusChance
  };
};

export function makeData(len = 1000) {
  return range(len).map(d => {
    return newRow();
  });
}