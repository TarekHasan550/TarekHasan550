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
  className?: string;
  lineColor?: string;
  lineWidth?: string;
  pointSize?: string;
  itemSpacing?: string;
  showLine?: boolean;
  showPoints?: boolean;
  contentSpacing?: string;
}

export function PointTimeline({
  items,
  className = '',
  lineColor = 'var(--primary)',
  lineWidth = '2px',
  pointSize = '10px',
  itemSpacing = '16px',
  showLine = true,
  showPoints = true,
  contentSpacing = '16px'
}: TimelineProps) {
  // Combine default classes with custom className
  const timelineClassName = `${className} custom-timeline-spacing ${
    !showPoints ? 'hide-points' : ''
  }`.trim();

  return (
    <>
      {/* Add CSS to customize the vertical line */}
      <style jsx global>{`
        .vertical-timeline::before {
          background: ${showLine ? lineColor : 'transparent'} !important;
          width: ${showLine ? lineWidth : '0px'} !important;
        }

        .vertical-timeline.vertical-timeline--one-column-left::before {
          left: 2px !important;
        }

        /* Custom spacing between timeline items */
        .custom-timeline-spacing .vertical-timeline-element {
          margin: ${itemSpacing} 0 0 !important;
        }

        /* Hide points when showPoints is false */
        .hide-points .vertical-timeline-element-icon {
          display: none !important;
        }

        /* Force my-10 margins with higher specificity */
        .force-margins.vertical-timeline {
          margin: 2.5rem 0 !important;
        }
      `}</style>

      <VerticalTimeline
        layout="1-column-left"
        className={timelineClassName}
        animate
      >
        {items.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            style={{ margin: `${itemSpacing} 0 0` }}
            contentStyle={{
              background: 'var(--background)',
              padding: '0 16px',
              marginLeft: contentSpacing,
              marginBottom: '6px',
              color: 'var(--primary)',
              boxShadow: '0 2px 0 var(--primary)',
              display: 'flex',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderLeft: '10px solid var(--primary)',
              borderRight: 'none',
              top: '12px',
            }}
            iconStyle={{
              background: 'var(--background)',
              color: 'var(--primary)',
              width: pointSize,
              height: pointSize,
              top: '14px',
              left: '-3px',
              border: `2px solid var(--primary)`,
              display: showPoints ? 'block' : 'none',
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
