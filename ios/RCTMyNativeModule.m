//
//  RCTMyNativeModule.m
//  RNCodeTest
//
//  Created by SmartWork on 6/4/21.
//  Copyright © 2021 Facebook. All rights reserved.
//

// RCTCalendarModule.m
#import "RCTMyNativeModule.h"

@implementation RCTMyNativeModule : NSObject

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE(MyNativeModule);

- (NSDictionary *)constantsToExport
{
  NSObject *service_key = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"SERVICE_KEY"];
  NSLog(@"Service key %@", service_key);
  return @{ @"SERVICE_KEY":  service_key};
}

@end
