import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SkeletonComp from './SkeletonComp'

const SkeletonLoader = () => {
  return (
    <View>
     <SkeletonComp />
     <SkeletonComp />
     <SkeletonComp />
     <SkeletonComp />
     <SkeletonComp />
     <SkeletonComp />
     <SkeletonComp />
     <SkeletonComp />
    </View>
  )
}

export default SkeletonLoader

const styles = StyleSheet.create({})
