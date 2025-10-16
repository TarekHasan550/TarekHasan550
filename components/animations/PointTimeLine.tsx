'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface TimelineItem {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function PointTimeline({items}: TimelineProps) {
  return (
    <>
      {/* Add CSS to customize the vertical line */}
      <style jsx global>{`
        .vertical-timeline::before {
          background: var(--primary) !important;
          width: 2px !important;
        }

        .vertical-timeline.vertical-timeline--one-column-left::before {
          left: 2px !important;
        }
      `}</style>

      <VerticalTimeline layout="1-column-left" className='!my-10' animate>
        {items.map((item, index) => (
          <VerticalTimelineElement
            key={ index }
            style={{ margin: '16px 0' }}
            contentStyle={{
              background: 'var(--background)',
              padding: '0 16px',
              marginBottom: '6px',
              color: 'var(--primary)',
              boxShadow: '0 2px 0 var(--primary)',
              display: 'flex',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              // FIX 3: Change to borderLeft for left-aligned timeline
              borderLeft: '10px solid var(--primary)',
              borderRight: 'none',
              top: '12px',
            }}
            iconStyle={{
              background: 'var(--background)',
              color: 'var(--primary)',
              width: '10px', // FIX 4: Minimum 10px for visibility
              height: '10px', // FIX 4: Minimum 10px for visibility
              top: '14px',
              // FIX 5: Add left position to align with line
              left: '-3px',
              // FIX 6: Add border to make circle visible
              border: '2px solid var(--primary)',
            }}
          >
            <h3 className="text-lg font-semibold text-foreground my-2">
              {item.title}
            </h3>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
}
