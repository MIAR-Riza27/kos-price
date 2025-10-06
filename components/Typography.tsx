import React from "react";
import type { JSX } from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small';
  texture?: 'default' | 'primary' | 'secondary' | 'light' | 'white' | 'muted' | 'gradient-primary' | 'gradient-secondary';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  spacing?: 'tight' | 'normal' | 'relaxed' | 'loose' | 'none';
  marginBottom?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

export default function Typography({ 
  children, 
  className = "", 
  variant = 'p',
  texture = 'default',
  size,
  weight,
  align = 'left',
  spacing,
  marginBottom,
  ...props
}: TypographyProps) {
  
  const textureStyles = {
    default: "text-[var(--foreground)]",
    primary: "text-[var(--color-primary)]", 
    secondary: "text-[var(--color-secondary)]",
    light: "text-[var(--color-primary-600)]",
    white: "text-white drop-shadow-sm",
    muted: "text-[var(--color-primary-400)]",
    'gradient-primary': "text-texture",
    'gradient-secondary': "text-texture-light"
  };

  const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm", 
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    '2xl': "text-2xl",
    '3xl': "text-3xl", 
    '4xl': "text-4xl",
    '5xl': "text-5xl",
    '6xl': "text-6xl",
    '7xl': "text-7xl"
  };

  const weightStyles = {
    normal: "font-normal",
    medium: "font-medium", 
    semibold: "font-semibold",
    bold: "font-bold"
  };

  const alignStyles = {
    left: "text-left",
    center: "text-center", 
    right: "text-right"
  };

  const spacingStyles = {
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
    none: "leading-none"
  };

  // Semantic margin bottom styles for better content flow - Added missing values
  const marginBottomStyles = {
    none: "",
    xs: "mb-1",
    sm: "mb-2",
    md: "mb-4",
    lg: "mb-6",
    xl: "mb-8",
    '2xl': "mb-12",
    '3xl': "mb-16",
    '4xl': "mb-20",
    '5xl': "mb-24",
    '6xl': "mb-32",
    '7xl': "mb-40"
  };

  // Default configurations for each variant with semantic spacing
  const variantDefaults = {
    h1: {
      size: size || '5xl',
      weight: weight || 'bold',
      spacing: spacing || 'tight',
      marginBottom: marginBottom || 'xl' // Large margin after main titles
    },
    h2: {
      size: size || '4xl',
      weight: weight || 'bold',
      spacing: spacing || 'tight',
      marginBottom: marginBottom || 'lg' // Section headers need substantial spacing
    },
    h3: {
      size: size || '3xl',
      weight: weight || 'semibold',
      spacing: spacing || 'normal',
      marginBottom: marginBottom || 'md' // Subsection headers
    },
    h4: {
      size: size || '2xl',
      weight: weight || 'semibold',
      spacing: spacing || 'normal',
      marginBottom: marginBottom || 'md'
    },
    h5: {
      size: size || 'xl',
      weight: weight || 'medium',
      spacing: spacing || 'normal',
      marginBottom: marginBottom || 'sm' // Smaller headers, less spacing
    },
    h6: {
      size: size || 'lg',
      weight: weight || 'medium',
      spacing: spacing || 'normal',
      marginBottom: marginBottom || 'sm'
    },
    p: {
      size: size || 'base',
      weight: weight || 'normal',
      spacing: spacing || 'relaxed',
      marginBottom: marginBottom || '2xl' // Large margin after paragraphs for component separation
    },
    span: {
      size: size || 'base',
      weight: weight || 'normal',
      spacing: spacing || 'normal',
      marginBottom: marginBottom || 'none' // Inline elements don't need margin
    },
    small: {
      size: size || 'sm',
      weight: weight || 'normal',
      spacing: spacing || 'normal',
      marginBottom: marginBottom || 'xs' // Minimal spacing for small text
    }
  };

  const defaults = variantDefaults[variant];
  
  const classes = [
    textureStyles[texture],
    sizeStyles[defaults.size as keyof typeof sizeStyles],
    weightStyles[defaults.weight as keyof typeof weightStyles],
    alignStyles[align],
    spacingStyles[defaults.spacing as keyof typeof spacingStyles],
    marginBottomStyles[defaults.marginBottom as keyof typeof marginBottomStyles],
    className
  ].filter(Boolean).join(' ');

  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}