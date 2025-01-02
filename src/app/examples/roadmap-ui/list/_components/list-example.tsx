'use client';
 
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { exampleFeatures, exampleStatuses } from '@/lib/roadmap-ui/content';
import {
  ListGroup,
  ListHeader,
  ListItem,
  ListItems,
  ListProvider,
} from '@/components/roadmap-ui/list';
import type { DragEndEvent } from '@dnd-kit/core';
import { type FC, useState } from 'react';
 
export const ListExample: FC = () => {
  const [features, setFeatures] = useState(exampleFeatures);
 
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
 
    if (!over) {
      return;
    }
 
    const status = exampleStatuses.find((status) => status.name === over.id);
 
    if (!status) {
      return;
    }
 
    setFeatures(
      features.map((feature) => {
        if (feature.id === active.id) {
          return { ...feature, status };
        }
 
        return feature;
      })
    );
  };
 
  return (
    <ListProvider onDragEnd={handleDragEnd}>
      {exampleStatuses.map((status) => (
        <ListGroup key={status.name} id={status.name}>
          <ListHeader name={status.name} color={status.color} />
          <ListItems>
            {features
              .filter((feature) => feature.status.name === status.name)
              .map((feature, index) => (
                <ListItem
                  key={feature.id}
                  id={feature.id}
                  name={feature.name}
                  parent={feature.status.name}
                  index={index}
                >
                  <div
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: feature.status.color }}
                  />
                  <p className="m-0 flex-1 font-medium text-sm">
                    {feature.name}
                  </p>
                  {feature.owner && (
                    <Avatar className="h-4 w-4 shrink-0">
                      <AvatarImage src={feature.owner.image} />
                      <AvatarFallback>
                        {feature.owner.name?.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </ListItem>
              ))}
          </ListItems>
        </ListGroup>
      ))}
    </ListProvider>
  );
};